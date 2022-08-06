import React from "react";
import { Badge, Button, Divider, Paper, TextField } from "@mui/material";
import {
  Add,
  Download,
  NotificationAdd,
  Notifications,
} from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <div className="flex justify-between  items-center font-bold text-2xl text-gray-600 bg-slate-100">
        <div className="mx-8">
          <h4 className="text-slate-700">Xpense Tracker</h4>
        </div>

        <div className="flex items-center w-[100] gap-6 my-4 mx-8">
          <Badge
            badgeContent={1}
            style={{
              backgroundColor: "#f1f1f1",
              borderRadius: "50%",
              color: "rgb(51,65,85)",
            }}
          >
            <Notifications className="text-grey-300" />
          </Badge>
          <TextField
            size="small"
            placeholder="Search dashboard"
            className="w-200 mx-5 "
          />
        </div>
      </div>
      <Divider />
      {/* Welcome user */}
      <div className="flex justify-between items-center my-4 mx-8">
        <div>
          <p className="text-gray-400">Good morning 👋🏿</p>
          <h3 className="font-bold spacing text-gray-600">BobTheBuilder</h3>
        </div>
        <div>
          <Button
            endIcon={<Add />}
            variant="contained"
            className="bg-slate-700"
            style={{ backgroundColor: "rgb(51,65,85)" }}
          >
            Add
          </Button>
          <Button style={{ color: "rgb(51,65,85)" }} className="ml-2">
            Download
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
