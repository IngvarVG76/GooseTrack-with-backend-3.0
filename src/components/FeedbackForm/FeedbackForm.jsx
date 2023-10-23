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
} from './FeedbackForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  createReview,
  deleteReview,
  editReview,
  getReviewOwn,
} from '../../redux/reviews/operation';
import { useEffect } from 'react';
import { reviewOwn } from '../../redux/reviews/selectors';

export const FeedbackForm = ({ modal, onClickModal }) => {
  const dispatch = useDispatch();
  const review = useSelector(reviewOwn);
  const [deleteReviewUser, setDeleteReviewUser] = useState(false);
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const initialValues = {
    textReview: review?.text || '',
    rating: review?.rating || 5,
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      textReview: Yup.string()
        .max(300, 'Must be 300 characters or less')
        .trim()
        .required('Fill in the field! Your feedback is very important to us'),
      rating: Yup.number().required(),
    }),
    onSubmit: ({ textReview, rating }) => {
      const trimmedReview = textReview.trim();
      const editAction = edit
        ? editReview({ _id: review._id, text: trimmedReview, rating })
        : createReview({ text: trimmedReview, rating });
      setEdit(false);
      onClickModal();
      dispatch(editAction);
    },
  });

  const receivingReview = useCallback(() => {
    dispatch(getReviewOwn());
  }, [dispatch]);

  useEffect(() => {
    if (!modal) return;
    receivingReview();
  }, [modal, receivingReview]);

  const handleDeleteClick = () => {
    dispatch(deleteReview(review._id));
    setDeleteReviewUser(true);
    setEdit(false);
    formik.setFieldValue('textReview', '');
    onClickModal();
  };

  return (
    <Container>
      <Title>Rating</Title>
      <Stack spacing={1}>
        <Rating
          disabled={disabled && !!review?.text}
          name="text-feedback"
          value={formik.values.rating}
          onChange={(event, newRating) => {
            formik.setFieldValue('rating', newRating);
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
          data-error={formik.errors.textReview}
          id="textReview"
          name="textReview"
          type="text"
          disabled={disabled && !!review?.text}
          placeholder="Enter text"
          onChange={formik.handleChange}
          onBlur={formik.onBlur}
          value={formik.values.textReview}
        />
        {formik.errors.textReview && (
          <ErrorText>{formik.errors.textReview}</ErrorText>
        )}
        {(deleteReviewUser || !review?.text) && (
          <WrapperButton>
            <ButtonSave
              type="submit"
              onClick={() => {
                setDeleteReviewUser(false);
              }}
            >
              Save
            </ButtonSave>
            <ButtonCancel
              type="button"
              onClick={() => {
                formik.resetForm();
              }}
            >
              Cancel
            </ButtonCancel>
          </WrapperButton>
        )}
        {!!review?.text && (
          <WrapperButtonEdit>
            <ButtonEdit
              data-edit={edit.toString()}
              type="button"
              onClick={() => {
                setDisabled(false);
                setEdit(true);
              }}
            >
              <LuPencil />
            </ButtonEdit>
            <ButtonDelete type="button" onClick={handleDeleteClick}>
              <RiDeleteBinLine />
            </ButtonDelete>
          </WrapperButtonEdit>
        )}
        {edit && (
          <WrapperButton>
            <ButtonSave type="submit">Edit</ButtonSave>
            <ButtonCancel
              type="button"
              onClick={() => {
                formik.resetForm();
              }}
            >
              Cancel
            </ButtonCancel>
          </WrapperButton>
        )}
      </Form>
    </Container>
  );
};
