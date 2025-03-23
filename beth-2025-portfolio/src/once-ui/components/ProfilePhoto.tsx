import React from 'react';
import styles from './Profile.module.scss'; // Import the SCSS module

interface ProfilePhotoProps {
  photoUrl: string;
  altText: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ photoUrl, altText }) => {
  return (
    <div className={styles['profile-photo-container']}>
      <img src={photoUrl} alt={altText} className={styles['profile-photo']} />
    </div>
  );
}

export default ProfilePhoto;
