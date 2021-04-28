Respostas para o teste de SQL:

1)Escreva uma query SQL para imprimir os detalhes dos
Workers cujo salário está entre 100000 e 500000.

SELECT * FROM WORKERS WHERE SALARY >= 100000 AND SALARY <= 500000;

2)Escreva uma query SQL para imprimir os detalhes dos
Workers que incressaram em Fevereiro de 2014.

SELECT * FROM WORKERS WHERE date_format(JOINING_DATE, '%m/%Y') = '02/2014';

3)Escreva uma query SQL para imprimir os detalhes dos
Workers que têm os mesmos salários.

SELECT * FROM WORKERS a WHERE EXISTS (SELECT * FROM WORKERS b WHERE b.SALARY = a.SALARY AND b.WORKER_ID != a.WORKER_ID);

4)Escreva uma query SQL para imprimir os detalhes dos
Workers que têm o maior salário de cada departamento.

SELECT * FROM WORKERS WHERE SALARY IN (SELECT max(SALARY) FROM WORKERS GROUP BY DEPARTMENT);
