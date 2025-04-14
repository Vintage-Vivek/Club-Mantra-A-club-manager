U2FsdGVkX18TPRYmqEpMTIkL/5gML3PY/zyNUgFzTwOR1yO8zF5Zo3pqcvqIUsG0XU73JV/N11GFOhpSWn1CO1js00lD0/sWUl26FtgRREhGKGibk7dwB++RBpRTtEdaXLcT8/VMZ0w7hoDnaIPBQB55ZqKYjHmwCe5/daV+MMe5L42q7eXpzIWeT7qpEFdtFYWaM5ZYDnuaZ1S0kYts+D7b8KyzygeK3iBTOYguf5lNZ84gvzzlF8irgzpEB3/eZR9jHx/VAyoorMgzd70MpQ==

async function fileUploadToCloudinary(filePath, folder) {
  return await cloudinary.uploader.upload(filePath, { folder, resource_type: 'auto' });
}

function checkFileType(supportedFile, fileExtension) {
  return supportedFile.includes(fileExtension);
}

async function sendNotification(docs) {
  const transporter = nodemailer.createTransport({
    host: process.env.host,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const mailResponse = await transporter.sendMail({
    from: 'From CampusHub official',
    to: docs.email,
    html: `<h1>congratulation club created successfully</h1> <a href="${docs.image}">Click to View Image</a>`,
    U2FsdGVkX1/ub0iEsupUdnwxwuJUVQ+cBrDhAbTHxF97qRl+XOoV4K21vdIS9z76+9bou+kFVhZGfdlrnYDz8obCZnH/6vqT/2eIT4mtGsl84GyPT+L6MGA6kMXE1OA4X2kr+RRuBAPTgVVvID6NfeZfTki60jEGS/8DCBCjjVVaLsF3seFQ8NNJ3AtORsV+0hINWh4qC4m1xdM6q5Z0ediZ4ElsXc9xfM+bm4H75wz+DluRWIY8XnbIfP4Qyy63Grrscn+cE/ROnNMg6rcJZSHouZmOiWmAhLKql3uuvt0lyjUsq6x8RPoH6tzTxR/c|| !venue || !image || !email) {
      return res.status(400).json({
        success: false,
        message: "please provide all data for club creation",
      });
    }

    const supportedFile = ['.jpeg', '.jpg', '.png', '.mp4'];
    const fileExtension = path.extname(image.name);

    if (checkFileType(supportedFile, fileExtension)) {
      var cloudinaryResponse = await fileUploadToCloudinary(image.tempFilePath, 'campusHub');
    } else {
      return res.status(400).json({
        success: false,
        message: "image file not supported...",
      });
    }

    const response = await Club.create({ title, venue, email, image: cloudinaryResponse.secure_url });

    if (!response) {
      return res.status(500).json({
        success: false,
        message: "failed to created club in mongodb...",
      });
    }

    const emailResponse = await sendNotification(response);

    res.status(200).json({
      success: true,
      message: "club created successfully",
      data: response,
    });
  }U2FsdGVkX19SDVNePbOxQ+GeEFt/sjO7iZPdexAFoX1boxjb7XLwxDu4FPHKflinI9RoahFdX1Wf5UL6JXE97eXDwLl5WIa8+F+ZxwYKnlU1kNFNffsmw2uOWfhPe8K/EqdZn8AciT+HHdiuJEHfyocDz9leEubGp95xUAGjnsypfFOOzrZO9ucJL236aidRyUJ9rue5nY/oIYYWX8xgDbupTCXpM9nPDkHkzLdWqpXxWdp8IqYS/JLwwMakdgZUphudQla2lxz28eiIL2xzLDgrkhfC/7JgQf2pMJA2AKt6/Q/EBLXbwjK3W7p0fLY+vidOc2bBTSBRlS8d7DQSUw==
    if (!response) {
      return res.status(404).json({ success: false, msg: 'No clubs found' });
    }

    res.status(200).json({ success: true, msg: 'club fetched successfully', response });
  } catch (err) {
    return res.status(500).json({ success: false, msg: 'failed to get clubs', err });
  }
};

const deleteClub = async (req, res) => {
  try {
    const { clubId } = req.params;

    if (!clubId) {
      return res.status(400).json({
        success: false,
        msg: 'Please provide club id for deletion',
      });
    }

    const club = await Club.findById(clubId);
    if (!club) {
      return res.status(404).json({
        success: false,
        msg: 'Club not found',
      });
    }

    const imageUrl = club.image;
    const publicId = imageUrl.split('/').slice(-2).join('/').split('.')[0];

    await cloudinary.uploader.destroy(publicId);

    const response = await Club.findByIdAndDelete(clubId);

    res.status(200).json({
      success: true,
      message: 'Club deleted successfully',
      response,
    });
    U2FsdGVkX1/VijRoiZ+h6dzrXqSlel4xbcr9tJQJSLXGfr57xp2jym8zPZHKDuxTGa0ELYqd0yAztrgKdab1zI6hfw6LCzUpxLkRVXeg3Qh04XxBFSNrU3JjL5sTfuaLRyfdFFS5iG/NGQqtVmowPgqgSAGzPNRNnDSuV2PPeiMAwxksSb4uK8JtSHm48ONlK73qqmx59EN+nLyVj1ifUM+3Fk5a2DycpsPdN4f9BGB8t3Ay7NSNjgA/gAfHuY9/NUeeSioK5U53k1/wLowB2f4bmsrzJV576hC76NL9Ku9hehaswIa9ffLly/0RlwV12NHIwFwwBqXGmTikOjDM1SiH5dKVypjqGLk9yXpsz0iP9YW32al20KgxXHTJ+/IST4f5Pn3WCusoeQCIZBls9Z2YW12LoL9vy8tEwp0yieNf2yb7HyncrCOugRajYn0hKqMn0xiiVh953+oM2wuKSA==e,
        msg: 'Please provide club id for updation',
      });
    }

    const clubData = await Club.findById(clubId);

    if (!clubData) {
      return res.status(404).json({
        success: false,
        msg: 'club not found by id for updation',
      });
    }

    let imageUrl = clubData.image;
    if (req.files && req.files.image) {
      const image = req.files.image;
      const supportedFile = ['.jpeg', '.jpg', '.png'];
      const fileExtension = path.extname(image.name);

      if (checkFileType(supportedFile, fileExtension)) {
        const result = await fileUploadToCloudinary(image.tempFilePath, 'campusHub');
        imageUrl = result.secure_url;
      } else {
        return res.status(400).json({
          success: false,
          message: "image file not supported...",
        });
      }
    }

    if (!title) {
      title = clubData.title;
      U2FsdGVkX1+nQHKyMeOTpkODAugQU0+9AQnG2IIdJ/Q2xwCgblb7BDS8X+OEY2MPrexP/GXSTdnLmMRCz4O8le5xGbQ5QFB+Im3UFW0z+hm2km33dI+tJ+THVSYjmUpwl6L7o5UvfAxNn7hhMRBbhOBurHcFeTiQCw4JZydLlWjXNV+fDriFPZwSNpzJHlBb9g7i6c1jMLrnnI3NCk061k94RvUa7XjKfVN1eN20gbzUWDdZjpfpH/bhXXsrgzoToXEUgiK2NHEtuNGDsuT50QUw54mgWz7TV2dmuVgl/7s=se) {
      return res.status(400).json({ success: false, msg: 'failed to update club data by mongodb' });
    }

    res.status(200).json({ success: true, message: 'club updated successfully', response });
  } catch (err) {
    return res.status(500).json({ success: false, msg: 'failed to update club', err });
  }
};

module.exports = { createClub, showClub, deleteClub, updateClub };