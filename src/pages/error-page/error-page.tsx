import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/');
    }, 500);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <>
      <style>{`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        html {
          background: #000;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        }

        head {
          display: block;
          position: relative;
          width: 200px;
          margin: 10% auto 0;
          animation: shvr 0.2s infinite;
        }

        head::after {
          content: '';
          width: 20px;
          height: 20px;
          background: #000;
          position: absolute;
          top: 30px;
          left: 25px;
          border-radius: 50%;
          box-shadow: 125px 0 0 #000;
          animation: eye 2.5s infinite;
        }

        meta {
          position: relative;
          display: inline-block;
          background: #fff;
          width: 75px;
          height: 80px;
          border-radius: 50%;
          transform: rotate(45deg);
        }

        meta::after {
          content: '';
          position: absolute;
          border-bottom: 2px solid #fff;
          width: 70px;
          height: 50px;
          left: 0px;
          bottom: -10px;
          border-radius: 50%;
        }

        meta::before {
          bottom: auto;
          top: -100px;
          transform: rotate(45deg);
          left: 0;
        }

        meta:nth-of-type(2) {
          float: right;
          transform: rotate(-45deg);
        }

        meta:nth-of-type(2)::after {
          left: 5px;
        }

        meta:nth-of-type(3) {
          display: none;
        }

        body {
          margin-top: 100px;
          text-align: center;
          color: #fff;
        }

        body::before {
          content: 'ОЙ!';
          font-size: 80px;
          font-weight: 800;
          display: block;
          margin-bottom: 10px;
        }

        @keyframes eye {

          0%,
          30%,
          55%,
          90%,
          100% {
            transform: translate(0, 0);
          }

          10%,
          25% {
            transform: translate(0, 20px);
          }

          65% {
            transform: translate(-20px, 0);
          }

          80% {
            transform: translate(20px, 0);
          }
        }

        @keyframes shvr {
          0% {
            transform: translate(1px);
          }

          50% {
            transform: translate(0);
          }

          100% {
            transform: translate(-1px);
          }
        }

        @keyframes text-show {
          to {
            text-indent: -373px;
          }
        }

        #countdown {
          font-size: 20px;
          color: #1EA7AB;
          margin-top: 20px;
        }

        a {
          color: #1EA7AB;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}
      </style>
      <div>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <p>Вы будете перенаправлены на <Link to="/">главную страницу</Link> через <span id="countdown">{countdown}</span> секунд.</p>
      </div>
    </>
  );
}
