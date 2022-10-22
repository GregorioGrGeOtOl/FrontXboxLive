import Edit from "assets/icon/edit_profile.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profiles } from "Service/profileService";
import { ProfilesTypes } from "types/interfaces";
import * as Styled from "./style";

export const ProfilesCards = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState<ProfilesTypes[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const payload: any = await Profiles.ProfilesUser();
      setProfiles(payload.data);
    };
    fetchProfiles();
  }, []);

  const handleEditProfile = async (id: string) => {
    navigate(`/profiles/edit/${id}`);
  };

  const handleNavigateHomepage = (id: string | undefined) => {
    if (id) {
      localStorage.setItem("profileId", id);
      navigate(`/profile/homepage/${id}`);
    }
  };

  return (
    <>
      {profiles.map((profile) => (
        <Styled.CardProfile key={profile.id}>
          <Styled.Profileimg
            onClick={() => handleNavigateHomepage(profile.id)}
            src={profile.imageUrl}
            alt="Avatar do usuário"
          />

          <Styled.ProfileDescription>{profile.title}</Styled.ProfileDescription>

          <Styled.ProfileEdit
            src={Edit}
            alt="Icone de editar o perfil"
            onClick={() => handleEditProfile(`${profile.id}`)}
          />
        </Styled.CardProfile>
      ))}
    </>
  );
};
