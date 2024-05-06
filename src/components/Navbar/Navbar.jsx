import { Typography, Stack, IconButton, useMediaQuery } from '@mui/material'
import { Link, useOutletContext } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';




export default function Navbar() {

    const { handleMobileMenu } = useOutletContext();
    const isMobile = useMediaQuery('(max-width:800px)')
  

    return (
        <Stack
            component={'header'}
            p={{ xs: 2, md: 3 }}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >

            <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={2}
            >

                {isMobile && (
                    <MenuIcon
                        onClick={() => handleMobileMenu(prev => !prev)}
                    />)
                }

                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Typography
                        variant='h1'
                        component={'h1'}
                        fontSize={28}
                        color={"rgba(151, 133, 186, 1)"}
                        fontWeight={700}
                    >
                        Bot AI
                    </Typography>
                </Link>
            </Stack>

            <Stack
                direction={'row'}
                spacing={0.2}
                alignItems={'center'}
            >
                <Typography
                    textTransform={'capitalize'}
                    fontSize={10}
                >
                    
                </Typography>
                
            </Stack>

        </Stack>
    )
}