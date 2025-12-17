import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ErrorPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
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
    <>
      <style>{`
        div {
          text-align: center;
          margin-top: 50px;
        }
        h1 {
          font-size: 72px;
          margin-bottom: 20px;
        }
        p {
          font-size: 24px;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .countdown {
          font-weight: bold;}
      `}
      </style>

      <div>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <p>Вы будете перенаправлены на <Link to="/">главную страницу</Link> через <span className="countdown">{countdown}</span> секунд.</p>
      </div>
    </>
  );
}

export default ErrorPage;
