import { useAuth } from "../../core/auth/hooks/useAuth";

const Home = () => {
  const { logout, isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <div>
      <h1>HOME</h1>

      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;