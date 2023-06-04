import { Box } from "../../../utils/uiCore";
import {
  BsCurrencyDollar,
  FiMail,
  IoCallSharp,
  IoLocationSharp,
} from "../../../utils/uiCore/icons";
import { useStyles } from "../style";

export const TopHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.topHeaderMain}>
      <Box className={classes.topHeaderLeft}>
        <Box className={classes.callBox}>
          <IoCallSharp className={classes.callIcon} />
          <Box className={classes.callText}>+221 33 66 22</Box>
        </Box>
        <Box className={classes.mailBox}>
          <FiMail className={classes.mailIcon} />
          <Box className={classes.mailText}>support@elextra.io</Box>
        </Box>
      </Box>
      <Box className={classes.topHeaderRight}>
        <Box className={classes.callBox}>
          <IoLocationSharp className={classes.callIcon} />
          <Box className={classes.callText}>Location</Box>
        </Box>
        <span className={classes.divideIcon}>|</span>
        <Box className={classes.mailBox}>
          <BsCurrencyDollar className={classes.dollarIcon} />

          <Box className={classes.mailText}>$ Dollar (US) ▼ </Box>
        </Box>
        <Box className={classes.langBox}>
          <Box className={classes.callText}>EN ▼</Box>
        </Box>
      </Box>
    </Box>
  );
};
