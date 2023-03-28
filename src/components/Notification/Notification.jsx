import PropTypes from 'prop-types';
import { NotificationHeader } from './Notification.styled';
export const Notification = ({ message }) => (
  <NotificationHeader>{message}</NotificationHeader>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
