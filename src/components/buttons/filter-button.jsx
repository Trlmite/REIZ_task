import React from "react";
import { Button } from "@mui/material";

const FilterButton = ({ name, onClick, toggled }) => {

    return (
        <Button
            variant="contained"
            sx={{ borderRadius: 8 }}
            onClick={onClick}
            color={toggled ? "primary" : "success"}
        >
            {name}
        </Button>
    )
}

export default FilterButton