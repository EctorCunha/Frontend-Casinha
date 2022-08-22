import { Card, styled } from "@mui/material";

export const Wrapper = styled(Card)({
    '.MuiTableCell-head': {
        fontWeight: 700
    },
    '.content': {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0
        }
    },
    '.bulkOperations': {
        position: 'relative'
    },
    '.bulkActions': {
        paddingLeft: 4,
        paddingRight: 4,
        marginTop: 6,
        position: 'absolute',
        width: '100%',
        zIndex: 2,
        backgroundColor: '#ffffff'
    },
    '.bulkAction': {
        marginLeft: 16
    },
    '.actions': {
        justifyContent: 'flex-end'
    },
    'isScroll': {
        overflow: 'auto',
        maxHeight: '600px'
    }
});
