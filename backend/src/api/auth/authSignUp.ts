import { DEFAULT_TENANT_ID } from '@crowd/common'

import AuthService from '../../services/auth/authService'

export default async (req, res) => {
  if (!req.body.acceptedTermsAndPrivacy) {
    return res.status(422).send({ error: 'Please accept terms of service and privacy policy' })
  }
  const payload = await AuthService.signup(
    req.body.email,
    req.body.password,
    req.body.invitationToken,
    DEFAULT_TENANT_ID,
    req.body.firstName,
    req.body.lastName,
    req.body.acceptedTermsAndPrivacy,
    req,
  )

  return req.responseHandler.success(req, res, payload)
}
