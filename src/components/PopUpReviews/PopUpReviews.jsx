import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Rating, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { LuPencil } from 'react-icons/lu';
import { RiDeleteBinLine } from 'react-icons/ri';
import {
  ButtonCancel,
  ButtonDelete,
  ButtonEdit,
  ButtonSave,
  Container,
  ErrorText,
  Form,
  Span,
  TextArea,
  Title,
  WrapperButton,
  WrapperButtonEdit,
} from './PopUpReviews.styled';

const KEY = 'feedback';

export const PopUpReviews = () => {
  const [rating, setRating] = useState(
    () => JSON.parse(window.localStorage.getItem(KEY))?.rating ?? 5,
  );
  const [submitted, setSubmitted] = useState(
    () => JSON.parse(window.localStorage.getItem(KEY))?.submitted ?? false,
  );
  const [edit, setEdit] = useState(false);
  const [initialValues, setInitialValues] = useState({
    review: JSON.parse(window.localStorage.getItem(KEY))?.review ?? '',
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      review: Yup.string()
        .max(300, 'Must be 300 characters or less')
        .trim()
        .required('Fill in the field! Your feedback is very important to us'),
    }),
    onSubmit: ({ review }) => {
      const trimmedReview = review.trim();
      setSubmitted(true);
      setEdit(false);
      window.localStorage.setItem(
        KEY,
        JSON.stringify({ review: trimmedReview, rating, submitted: true }),
      );
      setInitialValues({ review: trimmedReview });
    },
  });

  return (
    <Container>
      <Title>Rating</Title>
      <Stack spacing={1}>
        <Rating
          name="text-feedback"
          value={rating}
          disabled={submitted}
          onChange={(event, newRating) => {
            setRating(newRating);
          }}
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Stack>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">
          <Span>Review</Span>
        </label>
        <TextArea
          data-error={formik.errors.review}
          id="review"
          name="review"
          type="text"
          disabled={submitted}
          placeholder="Enter text"
          onChange={formik.handleChange}
          onBlur={formik.onBlur}
          value={formik.values.review}
        />
        {formik.errors.review && <ErrorText>{formik.errors.review}</ErrorText>}
        {!submitted && initialValues.review === '' && (
          <WrapperButton>
            <ButtonSave type="submit">Save</ButtonSave>
            <ButtonCancel type="button" onClick={() => formik.resetForm()}>
              Cancel
            </ButtonCancel>
          </WrapperButton>
        )}
        {initialValues.review !== '' && (
          <WrapperButtonEdit>
            <ButtonEdit
              data-edit={edit.toString()}
              type="button"
              onClick={() => {
                setSubmitted(false);
                setEdit(true);
              }}
            >
              <LuPencil />
            </ButtonEdit>
            <ButtonDelete
              type="button"
              onClick={() => {
                window.localStorage.setItem(
                  KEY,
                  JSON.stringify({ rating: 5, review: '', submitted: false }),
                );
                setInitialValues({ review: '' });
                setSubmitted(false);
                formik.resetForm();
              }}
            >
              <RiDeleteBinLine />
            </ButtonDelete>
          </WrapperButtonEdit>
        )}
        {edit && initialValues.review !== '' && (
          <WrapperButton>
            <ButtonSave type="submit">Edit</ButtonSave>
            <ButtonCancel type="button" onClick={() => formik.resetForm()}>
              Cancel
            </ButtonCancel>
          </WrapperButton>
        )}
      </Form>
    </Container>
  );
};
