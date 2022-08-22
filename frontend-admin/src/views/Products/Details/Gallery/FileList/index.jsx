import { Box, Button, Card, CardMedia, Grid, styled } from '@mui/material';

const ImageCard = styled(Card)({
    padding: 16,
    img: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
        marginBottom: 8,
        borderRadius: 4
    },
})

export function FileList ({ files, onDelete, formikProps, onRestoreImage }) {
  const s3BucketUrl = '//g2-casinha-files.s3.us-east-2.amazonaws.com';

  return (
    <Box>
      <Grid container spacing={3}>
        {files.map((item, index) => (
          <Grid item xs={12} md={3}>
            <ImageCard key={item.id}>
              <CardMedia component="img" image={`${item.url}`} />
              {item.delete ? (
                <Button
                  onClick={() => {
                    onRestoreImage(item, index);
                  }}
                  variant="outlined"
                  fullWidth
                >
                  Restaurar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(item, index)}
                  fullWidth
                >
                  Deletar
                </Button>
              )}
            </ImageCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
