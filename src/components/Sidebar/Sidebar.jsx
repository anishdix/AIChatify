
import { Typography, Box, Stack, Button, useMediaQuery } from '@mui/material'
import icon from '../../assets/newchat.png'
import { Link } from 'react-router-dom'
import AddCommentIcon from '@mui/icons-material/AddComment';
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar({ setChat, closeMenu }) {


    const isMobile = useMediaQuery('(max-width:800px)')

  

    return (
        <Box >


            {isMobile && (
                <Button
                    endIcon={<CloseIcon />}
                    sx={{
                        width: 1,
                        justifyContent: 'flex-end',
                        color: 'rgba(215, 199, 244, 1)'
                    }}
                    onClick={closeMenu}
                >
                    Close
                </Button>
            )}

            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Stack
                    onClick={() => {
                        setChat([])
                        closeMenu()
                    }}
                    sx={{
                        bgcolor: 'rgba(215, 199, 244, 1)',
                        '&:hover ': {
                            bgcolor: '#c4a9f6'
                        }
                    }}
                    direction={'row'}
                    spacing={1}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    py={2}
                    px={{xs:2, md:3}}
                >
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Box
                            component={'img'}
                            src={icon}
                            height={42}
                            width={42}
                            borderRadius={2}
                            boxShadow={4}
                            flexShrink={0}
                        />
                        <Typography
                            variant={'heading'}
                            fontSize={{xs:16, md:20}}
                            color={'text.primary'}
                            marginLeft={{md:5,xs:2}}
                        >
                            New Chat
                        </Typography>
                    </Stack>

                    <AddCommentIcon sx={{ color: 'text.primary' }} />

                </Stack>
            </Link>

            <Box p={{xs:2, md:3}} color={"rgba(0,0,0,0.5)"}>
                <Link to={'/history'}>
                    <Button
                        variant="contained" sx={{ width: 1 ,fontWeight:700}}
                        onClick={closeMenu}
                        p={5}
                        
                        style={{backgroundColor:"rgba(215, 199, 244, 1)",color:"rgba(0,0,0,0.5)"}}
                    >
                        Past Conversations
                    </Button>
                </Link>
            </Box>

        </Box>
    )
}