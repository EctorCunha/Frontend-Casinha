import { useCallback } from 'react';
import {
  Box,
  Card,
} from '@mui/material';
import { Gallery } from './Gallery/Upload';
import { FileList } from './Gallery/FileList';

export function TabGallery({ formikProps }) {
  const { values, setValues } = formikProps;

  const handleDrop = useCallback(
    acceptedFiles => {
      let newValues = { ...values };
      let images = newValues.images.concat(acceptedFiles);

      setValues({ ...values, images });
    },
    [values]
  );

  const handleUpload = files => {
    const uploadedFiles = files.map((file, index) => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    handleDrop(uploadedFiles);
  };

  const handleDeleteImage = (entity, entityIndex) => {
    let newValues = { ...values };
    newValues.images[entityIndex]['delete'] = 1;

    setValues({ ...values, images: newValues.images });
  };

  const onRestoreImage = (entity, entityIndex) => {
    let newValues = { ...values };
    newValues.images[entityIndex]['delete'] = 0;

    setValues({ ...values, images: newValues.images });
  };

  return (
    <Box>
      <Card sx={{ marginBottom: 4 }}>
        <Gallery onUpload={handleUpload} />
      </Card>
      {!!values.images.length && (
        <FileList
          files={values.images}
          formikProps={formikProps}
          onDelete={handleDeleteImage}
          onRestoreImage={onRestoreImage}
        />
      )}
    </Box>
  );
}
