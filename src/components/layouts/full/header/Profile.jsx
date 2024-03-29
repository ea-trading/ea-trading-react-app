import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Avatar,
    Box,
    Menu,
    Button,
    IconButton,
    Typography,
} from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../../../api/axios";


// import ProfileImg from "/assets/icons/pop.svg";

const Profile = () => {
    const [anchorEl2, setAnchorEl2] = useState(null);
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({type : 'LOGOUT'});
        localStorage.clear();
        navigate("/");
    };

    return (
      <Box>
        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === "object" && {
              color: "primary.main",
            }),
          }}
          onClick={handleClick2}
        >
          <Avatar
            src={
              user?.profileImage
                ? getImageUrl(user?.profileImage)
                : "/assets/icons/ai-avatar.svg"
            }
            alt={user?.first_name}
            sx={{
              width: 35,
              height: 35,
            }}
          />
        </IconButton>
        {/* ------------------------------------------- */}
        {/* Message Dropdown */}
        {/* ------------------------------------------- */}
        <Menu
          id="msgs-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "200px",
            },
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: "initial",
              sm: "initial",
              md: "initial",
            }}
            sx={{cursor :'pointer'}}
            py={1}
            px={2}
            onClick={() => navigate("/dashboard/profile")}
          >
            My Profile
          </Typography>

          <Box mt={1} py={1} px={2}>
            <Button
              onClick={handleLogout}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Logout
            </Button>
          </Box>
        </Menu>
      </Box>
    );
};

export default Profile;
