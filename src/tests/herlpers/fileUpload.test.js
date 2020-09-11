import { fileUpload } from '../../helpers/fileUpload'

describe('fileUpload file', () => {
  test('should load a file & return url', async () => {
    const response = await fetch(
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    )
    const blob = await response.blob()
    const file = new File([blob], 'photo.png')
    const url = await fileUpload(file)

    expect(typeof url).toBe('string')
  })

  test('should return an error', async () => {
    const file = new File([], 'photo.png')
    const url = await fileUpload(file)

    expect(url).toBe(null)
  })
})
