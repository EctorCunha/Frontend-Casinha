import Dropzone from 'react-dropzone';
import { Fab } from '@mui/material';
import { DropContainer, UploadMessage, ContainerMessage } from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export function Gallery({ onUpload }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste imagens aqui</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte as imagens aqui</UploadMessage>;
  }

  return (
    <>
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            <ContainerMessage>
              <label htmlFor="contained-button-file">
                <Fab component="span" size="small">
                  <AddPhotoAlternateIcon />
                </Fab>
              </label>
              {renderDragMessage(isDragActive, isDragReject)}
            </ContainerMessage>
          </DropContainer>
        )}
      </Dropzone>
    </>
  );
}
