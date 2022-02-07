import React from "react";
import { Button} from "@mui/material";

const FilterButton = ({name}) => {

    return(
        <Button 
        variant="contained" 
        sx={{bgcolor: "success.main",
        borderRadius: 8}}
        >
        {name}
        </Button>
    )
}

export default FilterButton