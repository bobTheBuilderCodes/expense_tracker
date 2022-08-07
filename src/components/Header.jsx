import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Add, Notifications } from "@mui/icons-material";

const Header = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 12,
    p: 2,
  };

  // State variables
  const [open, setOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState("");

  // Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTransaction = (e) => setTransactionType(e.target.value);
  const addTransaction = (e) => {
    e.preventDefault();
    console.log("Amount", amount, "Transaction type", transactionType);
  };

  return (
    <>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="font-medium text-slate-700 text-xl mb-2">
            Add Transactions
          </p>
          <Divider />
          <form className="flex flex-col">
            <TextField
              fullWidth
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              size="small"
              style={{ margin: "10px 0" }}
            />
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="withdrawal"
                name="radio-buttons-group"
                onChange={handleTransaction}
              >
                <FormControlLabel
                  value="withdrawal"
                  control={<Radio />}
                  label="Withdrawal"
                />
                <FormControlLabel
                  value="deposit"
                  control={<Radio />}
                  label="Deposit"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              className="bg-slate-700 mt-4"
              style={{
                backgroundColor: "rgb(51,65,85)",
                marginTop: 8,
                marginRight: 8,
              }}
              onClick={addTransaction}
            >
              Save
            </Button>
            <Button
              variant="text"
              className="text-slate-700 mt-4"
              style={{ color: "rgb(51,65,85)", marginTop: 8, marginLeft: 8 }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </form>
        </Box>
      </Modal>

      <div className="flex justify-between items-center font-bold text-2xl text-gray-600 bg-slate-100">
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
            onClick={handleOpen}
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
