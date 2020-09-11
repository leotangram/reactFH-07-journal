import cloudinary from 'cloudinary'
import { fileUpload } from '../../helpers/fileUpload'

cloudinary.config({
  cloud_name: 'dfilni70m',
  api_key: '916266836923311',
  api_secret: '1d9ssFPvwFGVOigGwKk6jHPgNc0'
})

describe('fileUpload file', () => {
  test('should load a file & return url', async done => {
    const response = await fetch(
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    )
    const blob = await response.blob()
    const file = new File([blob], 'photo.png')
    const url = await fileUpload(file)

    expect(typeof url).toBe('string')

    const segments = url.split('/')
    const imageId = segments[segments.length - 1].replace('.png', '')

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done()
    })
  })

  test('should return an error', async () => {
    const file = new File([], 'photo.png')
    const url = await fileUpload(file)

    expect(url).toBe(null)
  })
})
