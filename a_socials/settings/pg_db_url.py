import dj_dtabase_url
import dotenv

dotenv.load()

def config(env='DATABASE_URL', default=None, engine=None, conn_max_age=0):
    """Returns configured DATABASE dictionary from DATABASE_URL."""

    config = {}

    s = dotenv.get(env)

    if s:
        config = dj_dtabase_url.parse(s, engine, conn_max_age)

    return config
    