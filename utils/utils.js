import { roles, rolesTrans } from './constant';

export const getDateFormat = (datetime) => {
  return new Date(datetime).getDate() + '/' + new Date(datetime).getMonth() + '/' + new Date(datetime).getFullYear();
};

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
