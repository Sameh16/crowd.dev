import DataQualityService from '@/services/dataQualityService'

import Permissions from '../../security/permissions'
import PermissionChecker from '../../services/user/permissionChecker'

/**
 * GET /data-quality/organization
 * @summary Find a organization data issues
 * @tag Data Quality
 * @security Bearer
 * @description Find a data quality issues for organizations
 * @response 200 - Ok
 * @responseContent {DataQualityResponse} 200.application/json
 * @response 401 - Unauthorized
 * @response 404 - Not found
 * @response 429 - Too many requests
 */
export default async (req, res) => {
  new PermissionChecker(req).validateHas(Permissions.values.organizationRead)

  const segmentId = req.query.segments?.length > 0 ? req.query.segments[0] : null
  if (!segmentId) {
    await req.responseHandler.error(req, res, {
      code: 400,
      message: 'Segment ID is required',
    })
    return
  }

  const payload = await new DataQualityService(req).findOrganizationIssues()

  await req.responseHandler.success(req, res, payload)
}
