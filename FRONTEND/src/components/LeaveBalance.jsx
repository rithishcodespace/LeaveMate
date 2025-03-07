import { useState, useEffect } from "react";
import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/loggedinslice";

const LeaveBalance = () => {
  const [leavePercentage, setLeavePercentage] = useState(75);
  const [quote, setQuote] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const newPercentage = 40; // Example dynamic value
      setLeavePercentage(newPercentage);

      if (newPercentage > 75) {
        setQuote("✅ You're in a safe zone!");
      } else if (newPercentage >= 50) {
        setQuote("⚠️ Be careful, balance wisely!");
      } else {
        setQuote("🚨 You're at risk of low attendance!");
      }
    }, 1000);
  }, []);

  function handleLogout()
  {
      dispatch(logout());
      navigate("/login");
  }

  return (
    <Box className="flex items-center justify-center min-h-screen bg-black">
       <button className="p-2 bg-violet-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-violet-900" onClick={handleLogout}>Logout</button>
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {/* Card Background Fixed to Black */}
        <Card 
          className="bg-black text-white shadow-xl p-6 w-96 rounded-2xl border border-purple-500"
        >
          <CardContent>
            <Typography variant="h5" className="text-purple-400 font-semibold text-center">
              Leave Balance
            </Typography>
            <Typography variant="h6" className="text-gray-500 text-center mt-2">
              Remaining: {leavePercentage}%
            </Typography>
            
            <Box className="mt-4 bg-gray-900 p-2 rounded-lg ">
              <LinearProgress
                variant="determinate"
                value={leavePercentage}
                className="h-4 rounded-lg"
                sx={{
                  backgroundColor: "#1E1E1E",
                  "& .MuiLinearProgress-bar": { backgroundColor: "#A855F7" }, // Purple Progress Bar
                }}
              />
            </Box>

            {/* Dynamic Warning */}
            <Typography
              variant="subtitle1"
              className={`mt-4 text-center text-lg font-semibold ${
                leavePercentage < 50 ? "text-red-500" : "text-purple-400"
              }`}
            >
              {quote}
            </Typography>

            {/* View Details Button */}
            <Box className="mt-6 flex justify-center">
              <Link to="/dashboard/leavehistory">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px #A855F7" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 text-lg font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all cursor-pointer"
                >
                  View Details
                </motion.button>
              </Link>
            </Box>

          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default LeaveBalance;
