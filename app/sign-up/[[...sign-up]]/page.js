import { Container, AppBar, Toolbar, Typography, Button, Link, Box} from "@mui/material";
import { SignUp } from "@clerk/nextjs";

export default function signUpPage() {
    return(
        <Container maxWidth="100vw">
            <AppBar position="static" sx={{backgroundColor: "#3f51b5"}}>
                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow:1}}>Flash Card SaaS</Typography>
                    <Button color="inherit">
                        <Link href="/sign-in" passhref>
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/sign-up" passhref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Box display="flex" flexDirection="column" alignItems="center" justifyItems="center" justifyContent="center">
                <Typography variant="h4">Sign Up</Typography>
                <SignUp/>
            </Box>
        </Container>
    )
}