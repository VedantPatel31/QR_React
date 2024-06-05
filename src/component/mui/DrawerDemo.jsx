import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MailIcon from "@mui/icons-material/Mail";

export default function DrawerDemo() {
  const [open, setopen] = React.useState(false);
  // const [role, setrole] = React.useState("student");
  const [role, setrole] = React.useState("faculty");

  const toggleDrawer = (isopen) => () => {
    setopen(isopen);
  };
  const facultyLinks = [
    {
      title: "Faculty Login",
      linkTo: "/facultyLogin",
    },
    {
      title: "Faculty Register",
      linkTo: "/facultyRegister",
    },
    {
      title: "QR Code",
      linkTo: "/qrCode",
    },
    {
      title: "Add Branch",
      linkTo: "/branch",
    },
    {
      title: "Add Sem",
      linkTo: "/sem",
    },
    {
      title: "Add Subject",
      linkTo: "/subject",
    },
    {
      title: "QR CODE1",
      linkTo: "/qrCode1",
    },
    {
      title: "Student Login",
      linkTo: "/studentLogin",
    },
    {
      title: "Student Register",
      linkTo: "/studentRegister",
    },
    {
      title: "Scanner",
      linkTo: "/qrScanner",
    },
  ];
  const userLinks = [
    {
      title: "Student Login",
      linkTo: "/studentLogin",
    },
    {
      title: "Student Register",
      linkTo: "/studentRegister",
    },
    {
      title: "Scanner",
      linkTo: "/qrScanner",
    },
  ];
  console.log("drawer", open);

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        {role === "student"
          ? userLinks?.map((text) => (
            <ListItem key={text.title} disablePadding>
              <ListItemButton component={Link} to={text.linkTo}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))
          : facultyLinks?.map((text) => (
            <ListItem key={text.title} disablePadding>
              <ListItemButton component={Link} to={text.linkTo}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))
        }

      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}
