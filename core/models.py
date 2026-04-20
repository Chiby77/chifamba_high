from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        TEACHER = "TEACHER", "Teacher"
        STUDENT = "STUDENT", "Student"
        PARENT = "PARENT", "Parent"

    role = models.CharField(max_length=10, choices=Role.choices, default=Role.ADMIN)
    img = models.ImageField(upload_to="profiles/", null=True, blank=True)

class Admin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="admin_profile")
    
    def __str__(self):
        return self.user.username

class Grade(models.Model):
    level = models.IntegerField(unique=True)

    def __str__(self):
        return f"Grade {self.level}"

class Subject(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    def __str__(self):
        return self.name

class Teacher(models.Model):
    SEX_CHOICES = [
        ("MALE", "Male"),
        ("FEMALE", "Female"),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="teacher_profile")
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(unique=True, null=True, blank=True)
    phone = models.CharField(max_length=20, unique=True, null=True, blank=True)
    address = models.TextField()
    blood_type = models.CharField(max_length=5)
    sex = models.CharField(max_length=10, choices=SEX_CHOICES)
    subjects = models.ManyToManyField(Subject, related_name="teachers")
    birthday = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} {self.surname}"

class Class(models.Model):
    name = models.CharField(max_length=100, unique=True)
    capacity = models.IntegerField()
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE, related_name="classes")
    supervisor = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, blank=True, related_name="supervised_classes")

    def __str__(self):
        return self.name

class Parent(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="parent_profile")
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(unique=True, null=True, blank=True)
    phone = models.CharField(max_length=20, unique=True)
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} {self.surname}"

class Student(models.Model):
    SEX_CHOICES = [
        ("MALE", "Male"),
        ("FEMALE", "Female"),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="student_profile")
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(unique=True, null=True, blank=True)
    phone = models.CharField(max_length=20, unique=True, null=True, blank=True)
    address = models.TextField()
    blood_type = models.CharField(max_length=5)
    sex = models.CharField(max_length=10, choices=SEX_CHOICES)
    parent = models.ForeignKey(Parent, on_delete=models.CASCADE, related_name="students")
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE, related_name="students")
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE, related_name="students")
    birthday = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} {self.surname}"

class Lesson(models.Model):
    DAY_CHOICES = [
        ("MONDAY", "Monday"),
        ("TUESDAY", "Tuesday"),
        ("WEDNESDAY", "Wednesday"),
        ("THURSDAY", "Thursday"),
        ("FRIDAY", "Friday"),
    ]
    name = models.CharField(max_length=100)
    day = models.CharField(max_length=10, choices=DAY_CHOICES)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="lessons")
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE, related_name="lessons")
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name="lessons")

    def __str__(self):
        return f"{self.name} ({self.class_obj.name})"

class Exam(models.Model):
    title = models.CharField(max_length=100)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name="exams")

    def __str__(self):
        return self.title

class Assignment(models.Model):
    title = models.CharField(max_length=100)
    start_date = models.DateTimeField()
    due_date = models.DateTimeField()
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name="assignments")

    def __str__(self):
        return self.title

class Result(models.Model):
    score = models.IntegerField()
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE, null=True, blank=True, related_name="results")
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE, null=True, blank=True, related_name="results")
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="results")

    def __str__(self):
        return f"{self.student.name} - {self.score}"

class Attendance(models.Model):
    date = models.DateField()
    present = models.BooleanField()
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="attendances")
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name="attendances")

    def __str__(self):
        return f"{self.student.name} - {self.date} - {'Present' if self.present else 'Absent'}"

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE, null=True, blank=True, related_name="events")

    def __str__(self):
        return self.title

class Announcement(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE, null=True, blank=True, related_name="announcements")

    def __str__(self):
        return self.title
