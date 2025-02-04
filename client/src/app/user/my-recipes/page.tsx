"use client";
import {  Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { getRecipeByUserId } from "@/services/recipes";
import { recipe } from "@/types/recipes";
import { MainLoader, RecipeCard, Header } from "@/Components";
import { toast } from "react-toastify";

const PageContainer = styled('main') ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  padding: 0,
  gap: '10px'
})

const UserPage = () => {
  const { user } = useAuth();
  const [userRecipes, setUserRecipes] = useState<recipe[]>([]);
  const [loading, setLoading] = useState(true);

  const userId = user?._id;

  useEffect(() => {
    if (!userId) return;

    const fetchRecipes = async (id: string) => {
      try {
        setLoading(true)
        const response = await getRecipeByUserId(id);
        setUserRecipes(response.data.user.myRecipes);
      } catch (error) {
        toast.error(`Error al obtener recetas: ${error}`)
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes(userId);
  }, [userId]);

  return (
    <PageContainer>
      <Header sx={{width: '100%'}} />
      <Typography sx={{marginTop: '2%'}} variant="h1">Mis Recetas</Typography>
      <Typography variant="h2">Has subido <span style={{color: '#F48E28'}}>{userRecipes.length}</span> recetas</Typography>
      {loading ? (
        <MainLoader isOpen={loading} />
      ) : (
        <div>
          {userRecipes?.map((recipe) => (
            <RecipeCard
            key={recipe.id}
            recipe={recipe}
            _id={recipe._id}
            status={recipe.status}
            sx={{margin: '2% 0'}}
            />
          ))}
        </div>
      )}
    </PageContainer>
  );
};

export default UserPage;

