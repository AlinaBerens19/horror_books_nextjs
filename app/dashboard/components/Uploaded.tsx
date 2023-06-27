'use client'

import AWS from 'aws-sdk';
import { useEffect } from 'react';

const Uploaded = () => {

  AWS.config.update({
    accessKeyId: 'AKIAWB7BF7FPUKKFM7YY',
    secretAccessKey: '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',
    region: 'us-west-2',
  });


  useEffect(() => {
    try{
      const s3 = new AWS.S3();

      const downloadFileFromS3 = async (bucketName: string, key: string) => {
        try {
            const params = {
              Bucket: bucketName,
              Key: key,
            };
        
            const { Body } = await s3.getObject(params).promise();
            return Body;
          } catch (error) {
            console.error('Error downloading file from S3:', error);
            throw error;
          }
        };

          const file = downloadFileFromS3('horror-library', 'Stephen_King/Carrie/Stephen King - 1974 - Carrie.epub');
          console.log('FILE ==> ', file)
          console.log('S3 ==> ', s3)
        }
        catch(error){
          console.log('ERROR ==> ', error)
        }
    
  }, [])
  

  return (
    <div>
      
    </div>
  )
}

export default Uploaded
