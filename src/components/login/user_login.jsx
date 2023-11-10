import { useContext, useState } from "react";
import { UserContext } from "../../context/user_context";
import { getUsers } from "../../api/user/user.service";
import { Controller, useForm } from "react-hook-form";

const UserLogin = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = async ({ username, password }) => {
    try {
      const users = await getUsers();

      // Buscar el usuario con el nombre de usuario proporcionado
      const user = users.find((user) => user.username === username);

      if (user && user.password === password) {
        setCurrentUser({ username, password });
        setErrorMessage(""); // Limpiar mensaje de error si el login tiene éxito
        console.log("Usuario Logueado: " + currentUser.username);
      } else {
        setErrorMessage("Usuario no encontrado o contraseña incorrecta");
      }
    } catch (err) {
      console.warn(err);
      setErrorMessage("Ocurrió un error al intentar iniciar sesión");
    }
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setErrorMessage(""); // Limpiar mensaje de error al cerrar sesión
  };

  const loggedUser = () => (
    <>
      <div>Iniciar Sesión</div>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <>
            <input
              placeholder="Nombre de usuario"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              onBlur={field.onBlur}
              autoCapitalize="none"
            />
            {errors.username && (
              <div style={{ color: "red" }}>{errors.username.message}</div>
            )}
          </>
        )}
        rules={{ required: "El nombre de usuario es requerido" }}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <input
              type="password"
              placeholder="Contraseña"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              onBlur={field.onBlur}
              autoCapitalize="none"
            />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password.message}</div>
            )}
          </>
        )}
        rules={{ required: "La contraseña es requerida" }}
      />
      <button onClick={handleSubmit(handleLogin)}>
        <div>Entrar</div>
      </button>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );

  return (
    <div>
      {currentUser ? (
        <>
          <div>Bienvenido: </div>
          <div>{currentUser.username}</div>
          <button onClick={handleSubmit(handleSignOut)}>
            <div>Cerrar Sesión</div>
          </button>
        </>
      ) : (
        loggedUser()
      )}
    </div>
  );
};

export default UserLogin;
