import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

import { fetchUsers } from "../../UserApi";
import { COLORS_LIST, WHITE } from '../../Colors';

var userList = [];

const LastUsersList =  ({newUserColor}) => {
    
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        let mounted = true;
        if (newUserColor !== WHITE) {
            fetchUsers(1)
            .then(users => {
                if(mounted) {
                    userList.pop();
                    userList.unshift({name: users.results[0].name.first, color:newUserColor, key: users.results[0].login.uuid});
                    setUsers(userList); 
                    setIsLoading(false);
            }
            });
        
        }else{
            fetchUsers(10)
            .then(users => {
                if(mounted) {
                    users.results.forEach(user => {
                        userList.push({name: user.name.first, color:COLORS_LIST[Math.floor(Math.random() * COLORS_LIST.length)], key: user.login.uuid})
                    });
                    setUsers(userList); 
                    setIsLoading(false);
            }
            });
        };

        return () => mounted = false;
    }, [newUserColor]);

    if (isLoading) {
        return(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress/>
        </Box>
    )};

    return (
        <div className='users-container'>
            <h4>Latest</h4>
            <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableBody>
                    {users.map((user) => {
                        return(
                        <TableRow key={user.key}>
                            <TableCell component="th" scope="row" style={{display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
                                <p> {user.name} </p>
                                <span style={{backgroundColor: user.color, height: 10, width: 10, display: "block", borderRadius: 100}}></span>
                            </TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default LastUsersList;