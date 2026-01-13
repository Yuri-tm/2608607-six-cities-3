import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import './styles.css';

function ErrorPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <p>Вы будете перенаправлены на <Link to="/">главную страницу</Link> через <span id="countdown">{countdown}</span> секунд.</p>
    </div>
  );
}

export default ErrorPage;
