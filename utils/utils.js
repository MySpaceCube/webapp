import { roles, rolesTrans } from './constant';

export const getDateFormat = (datetime) => {
  return new Date(datetime).getDate() + ' ' + getMonths(new Date(datetime).getMonth()) + ' ' + new Date(datetime).getFullYear();
};

export const getMonths = (datetime) => {
  switch (datetime) {
  case 1:
    return 'February';
  case 2:
    return 'March';
  case 3:
    return 'April';
  case 4:
    return 'May';
  case 5:
    return 'June';
  case 6:
    return 'July';
  case 7:
    return 'August';
  case 8:
    return 'September';
  case 9:
    return 'October';
  case 10:
    return 'November';
  case 11:
    return 'Décember';
  case 0:
  default:
    return 'January';
  }
}

export const getDateTimeFormat = (datetime) => {
  return new Date(datetime).getUTCDate().toLocaleString();
};

export const getCurrentRole = (userRole) => {
  switch (userRole) {
  case roles.ROLE_SUPER_ADMIN:
    return rolesTrans.ROLE_SUPER_ADMIN;
  case roles.ROLE_ADMIN:
    return rolesTrans.ROLE_ADMIN;
  case roles.ROLE_MODERATOR:
    return rolesTrans.ROLE_MODERATOR;
  case roles.ROLE_EDITOR:
    return rolesTrans.ROLE_EDITOR;
  case roles.ROLE_AUTHOR:
    return rolesTrans.ROLE_AUTHOR;
  case roles.ROLE_MINECRAFT:
    return rolesTrans.ROLE_MINECRAFT;
  case roles.ROLE_MINECRAFT_ADMIN:
    return rolesTrans.ROLE_MINECRAFT_ADMIN;
  case roles.ROLE_MINECRAFT_MODERATOR:
    return rolesTrans.ROLE_MINECRAFT_MODERATOR;
  case roles.ROLE_USER:
  default:
    return rolesTrans.ROLE_USER;
  }
};

export const isAdmin = (userRole) => {
  switch (userRole) {
  case roles.ROLE_SUPER_ADMIN:
  case roles.ROLE_ADMIN:
  case roles.ROLE_MODERATOR:
  case roles.ROLE_EDITOR:
  case roles.ROLE_AUTHOR:
  case roles.ROLE_MINECRAFT_ADMIN:
  case roles.ROLE_MINECRAFT_MODERATOR:
    return true;
  case roles.ROLE_MINECRAFT:
  case roles.ROLE_USER:
  default:
    return false;
  }
};

export const getPoints = (points) => {
  if (points instanceof String) {
    points = parseInt(points);
  }

  if (!points) {
    return 0;
  }

  if (points.toString().length >= 11) {
    points /= 1000000000;
    return parseFloat(points.toFixed(1)) + ' B';
  }

  if (points.toString().length >= 8) {
    points /= 1000000;
    return parseFloat(points.toFixed(1)) + ' M';
  }

  if (points.toString().length >= 4) {
    points /= 1000;
    return parseFloat(points.toFixed(1)) + ' k';
  }

  return points;
};

export const getVerifyBadges = (user, checkIsVerify = true) => {
  if (checkIsVerify ? user.isVerify || !checkIsVerify : user.isVerify && !checkIsVerify) {
    switch (user.roles[0]) {
    case roles.ROLE_SUPER_ADMIN:
      return 'verify/verify-super-admin.svg';
    case roles.ROLE_ADMIN:
    case roles.ROLE_MINECRAFT_ADMIN:
      return 'verify/verify-admin.svg';
    case roles.ROLE_MINECRAFT_MODERATOR:
    case roles.ROLE_MODERATOR:
      return 'verify/verify-moderator.svg';
    case roles.ROLE_EDITOR:
      return 'verify/verify-editor.svg';
    case roles.ROLE_AUTHOR:
      return 'verify/verify-editor.svg';
    case roles.ROLE_MINECRAFT:
    case roles.ROLE_USER:
      if (!checkIsVerify ? !user.isMinecraftVerify && checkIsVerify : !user.isMinecraftVerify && checkIsVerify) {
        return 'verify/verify-partial.svg';
      }
      return 'verify/verify-all.svg';
    default:
      return 'verify/verify-all.svg';
    }
  } else if (user.isMinecraftVerify) {
    return 'verify/verify-partial.svg';
  } else {
    return 'verify/verify-none.svg';
  }
};

export const feedbackVariantType = (type) => {
  switch (type) {
  case 'style':
    return 'dark';
  case 'bug':
    return 'danger';
  case 'done':
    return 'info';
  case 'in-progress':
    return 'warning';
  case 'pending':
  default:
    return 'secondary';
  }
};

export const feedbackTransTargetApp = (targetApp) => {
  switch (targetApp) {
  case '3':
    return 'administration';
  case '2':
    return 'minecraft';
  case '1':
  default:
    return 'website';
  }
};

export const feedbackVariantTargetApp = (targetApp) => {
  switch (targetApp) {
  case '1':
    return 'danger';
  case '3':
    return 'warning';
  case '2':
    return 'success';
  default:
    return 'secondary';
  }
};

export const feedbackVariantStatus = (status) => {
  switch (status) {
  case 'accepted':
    return 'success';
  case 'refused':
    return 'danger';
  case 'done':
    return 'info';
  case 'in-progress':
    return 'warning';
  case 'pending':
  default:
    return 'secondary';
  }
};
