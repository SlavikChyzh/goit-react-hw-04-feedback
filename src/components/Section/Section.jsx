import PropTypes from 'prop-types';
import { SectionHeader } from './Section.styled';

export const Section = ({ title, children }) => (
  <>
    <SectionHeader>{title}</SectionHeader>
    <div>{children}</div>
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
