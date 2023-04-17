SELECT b.address
FROM balances b
INNER JOIN
  ( SELECT address,
           SUM( CASE denom
                    WHEN 'usdc' THEN amount * 0.000001
                    WHEN 'swth' THEN amount * 0.00000005
                    WHEN 'tmz' THEN amount * 0.003
                    ELSE 0
                END ) AS total_usd
   FROM balances
   WHERE block_height > 730000
   GROUP BY address) AS b_total ON b.address = b_total.address
INNER JOIN
  ( SELECT DISTINCT address
   FROM trades
   WHERE block_height > 730000 ) AS t ON b.address = t.address
WHERE b_total.total_usd >= 500;
