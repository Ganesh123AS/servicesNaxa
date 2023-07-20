import React from 'react';
import { Button } from "@mui/material";

const styles = {
    padding: "6px 32px",
    color: "#05f",
    backgroundColor: "#ffdc1c",
    borderColor: "#ffdc1c",
    borderRadius: "12px",
    width: "fit-content",
}
const ButtonCard = ({ text }) => {
    return (
        <Button style={styles}>{text}</Button>
    );
};

export default ButtonCard;