def is_prime(x):
	if x <= 1:
		return False
	elif x <= 3:
		return True
	elif x % 2 == 0 or x % 3 == 0:
		return False
	i = 5
	while i*i <= x:
		if x % i == 0 or x % (i + 2) == 0:
			return False
		i += 6
	return True