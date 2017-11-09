# resource: https://developers.google.com/identity/sign-in/web/backend-auth
import os
from oauth2client import client, crypt
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .errors import unauthorized


def resolve_google_oauth(request):
    # token should be passed as an object {'ID_Token' : id_token }
    # to this view
    token = request.data.get('ID_Token')
    CLIENT_ID = os.environ.get('CLIENT_ID')
    token.replace(" ", "")

    try:
        idinfo = client.verify_id_token(token, CLIENT_ID)

        if 'hd' not in idinfo:
            raise AuthenticationFailed()

        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            return unauthorized('Wrong Issuer')

        if idinfo['hd'] == 'andela.com' and \
            idinfo['email_verified'] == 'True' and \
            idinfo['aud'] == CLIENT_ID:
            return idinfo

    except crypt.AppIdentityError:
        return unauthorized('Invalid Token')

    return idinfo
