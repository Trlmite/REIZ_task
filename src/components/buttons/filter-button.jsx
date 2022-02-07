import React from "react";
import { Button} from "@mui/material";

const FilterButton = ({name, onClick}) => {

    return(
        <Button 
        variant="contained" 
        sx={{bgcolor: "success.main",
        borderRadius: 8}}
        onClick={onClick}
        >
        {name}
        </Button>
    )
}

export default FilterButton