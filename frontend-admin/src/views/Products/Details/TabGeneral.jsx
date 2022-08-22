import {
  Autocomplete,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  ListItemText,
  Menu,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';

export function TabGeneral({ categories, formikProps }) {
  const { values, handleChange, setValues, setFieldValue } = formikProps;

  function generateCategoryList() {
    const items = [];

    const orderedCategories = categories.sort((a, b) => {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });

    orderedCategories.forEach(category => {
      function isCategorySelected(category) {
        let position = -1;
        if (values.categories) {
          position = values.categories.findIndex(c => {
            return !c.delete && c.id === category.id;
          });
        }
        return position > -1;
      }

      function handleCategorySelect(category) {
        const categories = [...values.categories];

        const position = categories.findIndex(c => {
          return c.id === category.id;
        });

        if (position !== -1) {
          categories.splice(position, 1);
        } else {
          categories.push(category);
        }

        setValues({
          ...values,
          categories,
        });
      }

      items.push(
        <MenuItem
          onClick={() => handleCategorySelect(category)}
          key={category.id}
          sx={{ padding: 0 }}
        >
          <Checkbox type="checkbox" checked={isCategorySelected(category)} />
          <ListItemText primary={category.title} />
        </MenuItem>
      );
    });

    return items;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Informações"
                titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="title"
                      value={values.title}
                      label="Nome"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                  <TextField
                      variant="outlined"
                      type="number"
                      fullWidth
                      name="priceNight"
                      value={values.priceNight}
                      label="Valor da diária"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Descrição"
                titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
              />
              <Divider />
              <CardContent>
                <Editor
                  apiKey="uae1dird0imvqdg14uzptg3jyuonvzg5xjb0mcvml391kwcj"
                  value={values.description}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'code',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                      'code',
                      'help',
                      'wordcount',
                    ],
                    toolbar:
                      'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style:
                      'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  }}
                  onEditorChange={content =>
                    setFieldValue('description', content)
                  }
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card>
          <CardHeader title="Categorias" />
          <Divider />
          <CardContent>{generateCategoryList()}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
