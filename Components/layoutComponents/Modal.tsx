import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Modal,
  Divider,
  Typography,
  useMediaQuery,
  Fade,
  useTheme,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";




const StyledDialog = styled(Dialog)(({ theme }) => ({
  position: "absolute",

  left: 50,
  top: "-40%",
}));

type Props = {
  openPopup: boolean;
  title: string;
  children: React.ReactNode;
  setOpenPopUp: () => void | any;
  callback?: () => void;
};

function BasicModal({ children, title, openPopup, setOpenPopUp }: Props) {


  return (
    <Box sx={{ padding: "" }}>
      <StyledDialog
        open={openPopup}
        maxWidth="xl"

      >
        <DialogTitle sx={{ background: "", color: "" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component="div" style={{ flexGrow: "1" }}>
              {title}
            </Typography>
            <CancelPresentationIcon
              onClick={() =>
                // @ts-ignore
                setOpenPopUp(false)
              }
            />
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px ", width: "50vw", minWidth: "400px" }}
        >
          {children}
        </DialogContent>
      </StyledDialog>
    </Box>
  );
}

export default BasicModal;
