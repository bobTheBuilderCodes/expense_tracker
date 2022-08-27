import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Add, Notifications } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase/firebase";
import {
  addTransaction,
  getInitialIncome,
} from "../features/transactionsSlice";
import * as XLSX from "xlsx";
import { format } from "date-fns/esm";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const Header = () => {
  const { transactions } = useSelector((state) => state);
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
  const [amount, setAmount] = useState(0);

  const [greetUser, setGreetUser] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { totalExpenses, totalIncome } = useSelector(
    (state) => state.transactions
  );

  const date = new Date();
  const timeStamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  let formattedDate = format(date, "dd/MM/yyyy");
  const currentHour = date.getHours();

  function handleGreetings() {
    if (currentHour > 0 && currentHour < 12) {
      setGreetUser("morning");
    } else if (currentHour > 11 && currentHour < 16) {
      setGreetUser("afternoon");
    } else {
      setGreetUser("evening");
    }
  }

  useEffect(() => {
    handleGreetings();
  }, []);

  const handleSaveButtonDisabling = () =>
    transactionType && amount ? setIsDisabled(false) : setIsDisabled(true);

  useEffect(() => {
    handleSaveButtonDisabling();
  }, [transactionType, amount]);

  // Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTransaction = (e) => setTransactionType(e.target.value);
  const dispatch = useDispatch();
  const colRef = collection(db, "transactions");

  // Fetch data from backend
  // useEffect(() => {
  //   try {
  //     const getData = async () => {
  //       const data = await getDocs(collection(db, "initialMonies"));
  //       data?.docs.map((doc) =>
  //         dispatch(getInitialIncome({ id: doc.id, ...doc.data() }))
  //       );
  //     };
  //     getData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   onSnapshot(colRef, (snapshot) => {
  //     snapshot.docs.map((doc) =>
  //       dispatch(getInitialIncome({ id: doc.id, ...doc.data() }))
  //     );
  //   });
  // }, [dispatch]);

  const addTransactions = (e) => {
    e.preventDefault();

    // Add transactions to database
    addDoc(colRef, {
      transactionType,
      amount,
      time: `${formattedDate} at ${timeStamp}`,
    });
    handleClose();

    if (transactionType === "withdrawal" || transactionType === "Withdrawal") {
      console.log("Withdrawal is ", +totalIncome?.totalIncome - +amount);
      const res = +totalIncome?.totalIncome - +amount;
      console.log("res", res);
      // totalIncome?.totalIncome -= +amount;
    } else {
      const deposit = +totalIncome?.totalIncome + +amount;
      console.log("Deposit", deposit);
    }
  };

  const saveDataAsExcelFile = () => {
    const excelBook = XLSX.utils.book_new();
    const excelSheet = XLSX.utils.json_to_sheet(transactions.allTransactions);
    XLSX.utils.book_append_sheet(excelBook, excelSheet, "My Sheet");
    XLSX.writeFile(excelBook, "MyTransactions.xlsx");
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
                value={transactionType}
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
              onClick={addTransactions}
              disabled={isDisabled}
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
          <p className="text-gray-400">Good {greetUser} 👋🏿</p>
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
          <Button
            style={{ color: "rgb(51,65,85)" }}
            className="ml-2"
            onClick={saveDataAsExcelFile}
          >
            Download
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
