/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PackageUploadBeginResponse class.
 * @constructor
 * A response containing information pertaining to starting a package upload
 * process
 *
 * @member {string} uploadId The ID for the current upload
 * 
 * @member {string} uploadUrl The URL where the client needs to upload the
 * package to
 * 
 */
function PackageUploadBeginResponse() {
}

/**
 * Defines the metadata of PackageUploadBeginResponse
 *
 * @returns {object} metadata of PackageUploadBeginResponse
 *
 */
PackageUploadBeginResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PackageUploadBeginResponse',
    type: {
      name: 'Composite',
      className: 'PackageUploadBeginResponse',
      modelProperties: {
        uploadId: {
          required: true,
          serializedName: 'upload_id',
          type: {
            name: 'String'
          }
        },
        uploadUrl: {
          required: true,
          serializedName: 'upload_url',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PackageUploadBeginResponse;
