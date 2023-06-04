/* eslint-disable jsx-a11y/alt-text */
import { Paper } from "@mui/material";

export const Items = (props:any) => {
  return (
    <Paper>
          <img style={{height:"15rem"}} src={props.item.image}/>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
};
