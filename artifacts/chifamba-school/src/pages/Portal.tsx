import { motion } from "framer-motion";
import { BookOpen, User, Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Portal() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-primary p-8 text-center text-white">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
              <BookOpen size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Portal Login</h1>
            <p className="text-blue-100">Chifamba High School</p>
          </div>

          <div className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Student/Staff ID</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="text" 
                    placeholder="Enter your ID" 
                    className="pl-10 py-6 bg-gray-50 border-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700 block">Password</label>
                  <a href="#" className="text-sm text-secondary hover:text-primary font-medium">Forgot?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="pl-10 py-6 bg-gray-50 border-gray-200"
                  />
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-primary py-6 text-lg font-bold rounded-xl mt-4">
                <LogIn className="mr-2 h-5 w-5" /> Sign In
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                Having trouble logging in? Please contact the administration office or your class teacher for assistance.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
