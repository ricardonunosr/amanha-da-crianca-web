import React, { useState, useContext, useEffect } from 'react';
import { firestore, storage } from '../../utils/firebase';
import {
  Container,
  StyledForm,
  StyledInputField,
  StyledSelectField,
  StyledDatePickerField
} from './styles';
import { Formik, Field } from 'formik';
import Button from '../../styles/elements/Button';

import NotificationContext from '../../contexts/NotificationContext';
import data from './data';
import * as Yup from 'yup';

interface Option {
  url?: string;
  label: string;
  value: string;
}

const AddGame: React.FC = () => {
  const { showNotification } = useContext(NotificationContext);
  const [imageHome, setImageHome] = useState<File>();
  const [imageAway, setImageAway] = useState<File>();
  const [options, setOptions] = useState<Option[]>([
    { value: 'new', label: 'Nova Equipa' }
  ]);

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    var storageRef = storage.ref('images');
    setOptions([{ value: 'new', label: 'Nova Equipa' }]);
    storageRef.listAll().then(async function (result) {
      result.items.forEach(async function (imageRef) {
        const url = await imageRef.getDownloadURL();
        const label = imageRef.name.split('.')[0];
        const value = imageRef.name.split('.')[0].replace(/ /g, '');
        setOptions(pastOptions => [...pastOptions, { url, label, value }]);
      });
    });
  };

  const getUrlImage = async (fileName: string): Promise<string> => {
    return await storage.ref(fileName).getDownloadURL();
  };

  const fileUpload = async (image: File, newHomeTeamName: string) => {
    const fileName = formatFileName(image.name, newHomeTeamName);
    await storage.ref(fileName).put(image);
    return fileName;
  };

  const formatFileName = (imageName: string, newHomeTeamName: string) => {
    const split = imageName.split('.');
    return `images/${newHomeTeamName}.${split[1]}`;
  };

  const handleDelete = async (url: string) => {
    await storage.refFromURL(url).delete();
    showNotification('Eliminado');
    getAllImages();
  };

  return (
    <Container>
      <Formik
        initialValues={{
          date: new Date(),
          homeTeam: 'new',
          newHomeTeamFile: '',
          newHomeTeamName: '',
          awayTeam: 'new',
          newAwayTeamFile: '',
          newAwayTeamName: '',
          fieldName: '',
          type: 'seniores'
        }}
        onSubmit={async (values, actions) => {
          //alert(JSON.stringify(values, null, 2));
          var urlHome, urlAway;
          if (values.homeTeam === 'new' && imageHome !== undefined) {
            const fileName = await fileUpload(
              imageHome,
              values.newHomeTeamName
            );
            const url = await getUrlImage(fileName);
            urlHome = url.split('&token')[0];
          } else {
            const url = options.find(team => team.value === values.homeTeam)
              ?.url;
            if (url !== undefined) {
              urlHome = url.split('&token')[0];
            }
          }
          if (values.awayTeam === 'new' && imageAway !== undefined) {
            const fileName = await fileUpload(
              imageAway,
              values.newAwayTeamName
            );
            const url = await getUrlImage(fileName);
            urlAway = url.split('&token')[0];
          } else {
            const url = options.find(team => team.value === values.awayTeam)
              ?.url;
            if (url !== undefined) {
              urlAway = url.split('&token')[0];
            }
          }
          const nextResultsReference = firestore.collection('nextMatches');

          nextResultsReference.add({
            awayTeam: urlAway,
            date: values.date.toISOString(),
            fieldName: values.fieldName,
            homeTeam: urlHome,
            type: values.type
          });
          getAllImages();
          showNotification('Ação teve sucesso');
          actions.resetForm();
        }}
        validationSchema={Yup.object().shape({
          date: Yup.date().required(),
          homeTeam: Yup.string().required(),
          newHomeTeamFile: Yup.string().when('homeTeam', {
            is: 'new',
            then: Yup.string().required('Obrigatório')
          }),
          newHomeTeamName: Yup.string().when('homeTeam', {
            is: 'new',
            then: Yup.string().required('Obrigatório')
          }),
          newAwayTeamFile: Yup.string().when('awayTeam', {
            is: 'new',
            then: Yup.string().required('Obrigatório')
          }),
          awayTeam: Yup.string().required(),
          newAwayTeamName: Yup.string().when('awayTeam', {
            is: 'new',
            then: Yup.string().required('Obrigatório')
          }),
          fieldName: Yup.string().required('Obrigatório'),
          type: Yup.string().required('Obrigatório')
        })}
      >
        {({ values, errors, touched }) => (
          <StyledForm>
            <label htmlFor="date">Data</label>
            <StyledDatePickerField name="date" />
            <label htmlFor="homeTeam">Equipa da casa</label>
            <Field
              isSearchable={true}
              isClearable={true}
              options={options}
              component={StyledSelectField}
              defaultValue={options[0]}
              name="homeTeam"
              handleDelete={handleDelete}
            />
            {values.homeTeam === 'new' ? (
              <>
                <StyledInputField
                  name="newHomeTeamFile"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  error={errors.newHomeTeamFile}
                  touched={touched.newHomeTeamFile}
                  setFile={setImageHome}
                />
                <StyledInputField
                  name="newHomeTeamName"
                  error={errors.newHomeTeamName}
                  touched={touched.newHomeTeamName}
                />
              </>
            ) : (
              ''
            )}
            <label htmlFor="awayTeam">Equipa de fora</label>
            <Field
              isSearchable={true}
              isClearable={true}
              options={options}
              component={StyledSelectField}
              defaultValue={options[0]}
              name="awayTeam"
              handleDelete={handleDelete}
            />
            {values.awayTeam === 'new' ? (
              <>
                <StyledInputField
                  name="newAwayTeamFile"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  error={errors.newAwayTeamFile}
                  touched={touched.newAwayTeamFile}
                  setFile={setImageAway}
                />
                <StyledInputField
                  name="newAwayTeamName"
                  error={errors.newAwayTeamName}
                  touched={touched.newAwayTeamName}
                />
              </>
            ) : (
              ''
            )}
            <label htmlFor="fieldName">Campo</label>
            <StyledInputField
              name="fieldName"
              id="name"
              error={errors.fieldName}
              touched={touched.fieldName}
            />
            <label htmlFor="type">Escalão</label>
            <Field
              options={data}
              defaultValue={data[0]}
              name="type"
              component={StyledSelectField}
            />
            <Button type="submit">Submit</Button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};
export default AddGame;
