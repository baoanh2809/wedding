/* eslint-disable */
import '@babel/polyfill';
import { showAlert } from './alert';
import { displayMap } from './mapbox';
import { login, logout, signup } from './login';
import { updateSettings } from './updateSetting';
import { eventUser, createEvent, deleteEvent } from './eventUpdate';
import { storyUser, createStory, deleteStory,updateStory } from './storyUpdate';
import { createwedding } from './createwedding';
import { createBridesMaids,deleteBridesMaids,updateBridesMaids } from './bridesMaidsUpdate'
//dom element
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const createweddingForm = document.querySelector('.form-create-wedding');
const eventForm = document.querySelectorAll('.form-event-user');
const storyForm = document.querySelectorAll('.form-story-user');
const bridesmaidsForm = document.querySelector('.form-bridesmaid-user');
const createEventForm = document.getElementById('add-more-event');
const createStoryForm = document.getElementById('add-more-story');
const createBridesMaidForm = document.getElementById('add-more-bridesmaids');
const test = document.querySelectorAll('.form-user-test');

if (bridesmaidsForm) {
  bridesmaidsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    for (let i = 1; i <= test.length; i++) {
      const id = document.getElementById('id' + i).value;
      if (id == i) {
        const bridesmaidId = document.getElementById('bridesmaidId' + i)
          .value;
        const photo = document.getElementById('avatar' + i).files[0];
        const fephoto = document.getElementById('feavatar' + i).files[0];
        console.log(photo);
        console.log(fephoto);
        if (photo != undefined && fephoto != undefined) {
          const formData = new FormData();
          formData.append('name', document.getElementById('name' + i).value);
          formData.append('birthday', document.getElementById('birthday' + i).value);
          formData.append('introduce', document.getElementById('introduce' + i).value);
          formData.append('fb', document.getElementById('fb' + i).value);
          formData.append('avatar' , document.getElementById('avatar' + i).files[0]);
          formData.append('fename', document.getElementById('fename' + i).value);
          formData.append('febirthday', document.getElementById('febirthday' + i).value);
          formData.append('feintroduce', document.getElementById('feintroduce' + i).value);
          formData.append('fefb', document.getElementById('fefb' + i).value);
          formData.append('feavatar', document.getElementById('feavatar' + i).files[0]);
          await updateBridesMaids(bridesmaidId, formData);
        }
        else if (photo != undefined && fephoto == undefined) {
          const formData = new FormData();
          formData.append('name', document.getElementById('name' + i).value);
          formData.append('birthday', document.getElementById('birthday' + i).value);
          formData.append('introduce', document.getElementById('introduce' + i).value);
          formData.append('fb', document.getElementById('fb' + i).value);
          formData.append('avatar' , document.getElementById('avatar' + i).files[0]);
          formData.append('fename', document.getElementById('fename' + i).value);
          formData.append('febirthday', document.getElementById('febirthday' + i).value);
          formData.append('feintroduce', document.getElementById('feintroduce' + i).value);
          formData.append('fefb', document.getElementById('fefb' + i).value);
          await updateBridesMaids(bridesmaidId, formData);
          location.reload(true);
        } else if (fephoto != undefined && photo == undefined) {
          const formData = new FormData();
          formData.append('name', document.getElementById('name' + i).value);
          formData.append('birthday', document.getElementById('birthday' + i).value);
          formData.append('introduce', document.getElementById('introduce' + i).value);
          formData.append('fb', document.getElementById('fb' + i).value);
          formData.append('fename', document.getElementById('fename' + i).value);
          formData.append('febirthday', document.getElementById('febirthday' + i).value);
          formData.append('feintroduce', document.getElementById('feintroduce' + i).value);
          formData.append('fefb', document.getElementById('fefb' + i).value);
          formData.append('feavatar', document.getElementById('feavatar' + i).files[0]);
          await updateBridesMaids(bridesmaidId, formData);
          location.reload(true);
        } else {
          const formData = new FormData();
          formData.append('name', document.getElementById('name' + i).value);
          formData.append('birthday', document.getElementById('birthday' + i).value);
          formData.append('introduce', document.getElementById('introduce' + i).value);
          formData.append('fb', document.getElementById('fb' + i).value);
          formData.append('fename', document.getElementById('fename' + i).value);
          formData.append('febirthday', document.getElementById('febirthday' + i).value);
          formData.append('feintroduce', document.getElementById('feintroduce' + i).value);
          formData.append('fefb', document.getElementById('fefb' + i).value);
          await updateBridesMaids(bridesmaidId, formData);
          location.reload(true);
          }
        // const name = document.getElementById('name' + i).value;
        // const birthday = document.getElementById('birthday' + i).value;
        // const introduce = document.getElementById('introduce' + i).value;
        // const fb = document.getElementById('fb' + i).value;
        // const fename = document.getElementById('fename' + i).value;
        // const febirthday = document.getElementById('febirthday' + i).value;
        // const feintroduce = document.getElementById('feintroduce' + i).value;
        // const fefb = document.getElementById('fefb' + i).value;
        // console.log(
        //   bridesmaidId,
        //   name,
        //   birthday,
        //   introduce,
        //   fb,
        //   fename,
        //   febirthday,
        //   feintroduce,
        //   fefb
        // );
        // updateBridesMaids(bridesmaidId,name, birthday, introduce, fb, fename, febirthday, feintroduce, fefb);
      }
    }
  })
}


if (createBridesMaidForm) {
    createBridesMaidForm.addEventListener('click', async e => {
      e.preventDefault();
      e.target.textContent = 'Processing...';
      const { groomens } = e.target.dataset;
      await createBridesMaids(groomens);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  var bridemaidId;
  var deleteBtn = $('.btn-remove-bridesmaids');
  deleteBtn.click(function(e) {
    e.preventDefault();
    var bridemaidId = $(this).data('id');
    console.log(bridemaidId);
    deleteBridesMaids(bridemaidId);
  });
},true);


if (storyForm) {
  storyForm.forEach(form => {
    form.addEventListener('submit',async e => {
      e.preventDefault();
      for (let i = 1; i <= storyForm.length; i++) {
        const id = document.getElementById('id' + i).value;
        if (id == i) {
          const story = document.getElementById('storyId' + i).value;
          const photo = document.getElementById('storyPhoto' + i)
            .files[0];
          if (photo == undefined) {
             const title = document.getElementById('title' + i).value;
            const time = document.getElementById('time' + i).value;
            const content = document.getElementById('content' + i).value;
            await updateStory(story, title, time, content);
          } else {
            const forms = new FormData();
            forms.append('title', document.getElementById('title'+i).value);
            forms.append('time', document.getElementById('time' + i).value);
            forms.append('content', document.getElementById('content' + i).value);
            forms.append('storyPhoto', document.getElementById('storyPhoto' + i).files[0])
            await storyUser(story, forms);
          }        
        }
      }
      })
    })
}

  
document.addEventListener('DOMContentLoaded', function() {
  var storyId;
  var deleteBtn = $('.btn-delete-story');
  deleteBtn.click(function(e) {
    e.preventDefault();
    var storyId = $(this).data('id');
    deleteStory(storyId);
  });
});

if (createStoryForm) {
  createStoryForm.addEventListener('click', async e => {
    e.target.textContent = 'Processing...';
    const { story } = e.target.dataset;
    console.log(story);
    await createStory(story);
  });
}

  
document.addEventListener('DOMContentLoaded', function() {
  var eventId;
  var deleteBtn = $('.btn-delete-event');
  deleteBtn.click(function(e) {
    e.preventDefault();
    var eventId = $(this).data('id');
    deleteEvent(eventId);
  });
});

if (createEventForm) {
  createEventForm.addEventListener('click', async e => {
    e.target.textContent = 'Processing...';
    const { event } = e.target.dataset;
    console.log(event)
    await createEvent(event);
  });
}

// if (createEventForm)
//   createEventForm.addEventListener('click', async e => {
//     // e.preventDefault();
//     e.target.textContent = 'Processing...';
//     const { weddingId } = e.target.dataset;
//     console.log(weddingId)
//   }
// );


if (eventForm)
  eventForm.forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      // const nodeList = document.querySelectorAll('.btn--save');
      // nodeList.forEach(node => node.textContent = 'Processing...');
      for (let i = 1; i <= eventForm.length; i++) {
        const id = document.getElementById('id' + i).value;
        if (id == i) {
          const event = document.getElementById('eventId' + i).value;
          const photo = document.getElementById('eventPhoto' + i).files[0];
          console.log(photo)
          const test = document.getElementById('eventphotostore' + i)
            .value;
            console.log(test);
          if (photo != undefined) {
            const form = new FormData();
            form.append('name', document.getElementById('name' + i).value);
            form.append('date', document.getElementById('date' + i).value);
            form.append('time', document.getElementById('time' + i).value);
            form.append('address', document.getElementById('address' + i).value);
            form.append('map', document.getElementById('map' + i).value);
            form.append('eventPhoto', document.getElementById('eventPhoto' + i).files[0]);
            await eventUser(event, form);
          } else {
            const form = new FormData();
            form.append('name', document.getElementById('name' + i).value);
            form.append('date', document.getElementById('date' + i).value);
            form.append('time', document.getElementById('time' + i).value);
            form.append('address', document.getElementById('address' + i).value);
            form.append('map', document.getElementById('map' + i).value);
            form.append('eventPhoto', document.getElementById('eventphotostore' + i).value);
            await eventUser(event, form);
          }
        }
      }
    });
  });

//delegation
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}
if (logOutBtn) logOutBtn.addEventListener('click', logout, false);

if (userDataForm) {
  userDataForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-settings').textContent = 'Updating...'
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    form.append('address', document.getElementById('address').value);
    form.append('phone', document.getElementById('phone').value);
    form.append('nation', document.getElementById('nation').value);
    await updateSettings(form, 'data');
    // console.log(document.getElementById('photo').files[0]);
    // const photo = document.getElementById('photo').files[0];
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const address = document.getElementById('address').value;
    // const phone = document.getElementById('phone').value;
    // const nation = document.getElementById('nation').value;
    // await updateSettings(photo,name, email, address, phone, nation);
    document.querySelector('.btn--save-settings').textContent = 'Save settings'
    // location.reload(true)
  });
}
if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    if (passwordCurrent === password) {
      showAlert('error', 'Password is not same');
      return;
    }
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );
    document.querySelector('.btn--save-password').textContent = 'Save Password';
    userPasswordForm.reset();
  });
}
//bookBtn response dataset

//signup
if (signupForm) {
  signupForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name1 = document.getElementById('name1').value;
    const email1 = document.getElementById('email1').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    await signup(name1, email1, password1, password2);
    console.log(name1, email1, password1, password2);
  });
}

