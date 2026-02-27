import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      login: 'Login',
      signin: 'Sign In',
      home: 'Home',
      contact: 'Contact'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have a question or suggestion? Send us a message!',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'An error occurred while sending the message.'
    },
    home: {
      hero: {
        title: 'Manage your {span} inventory smartly',
        thread: 'thread',
        subtitle: 'ThreadStocks helps you track your embroidery, sewing, or knitting thread stocks. Never run out of the perfect color for your projects again.',
        startFree: 'Start for free',
        learnMore: 'Learn more'
      },
      why: {
        title: 'Why use ThreadStocks?',
        feature1: {
          title: 'Complete Inventory',
          desc: 'List all your threads with their references, brands, and exact quantities.'
        },
        feature2: {
          title: 'Fast Updates',
          desc: 'Adjust your stocks in one click after each creation session to keep your data up to date.'
        },
        feature3: {
          title: 'Access Anywhere',
          desc: 'Check your stock from your mobile when you\'re at the store to avoid duplicates.'
        }
      }
    },
    features: {
      title: '{span} Features',
      item1: {
        title: 'Precise Inventory Management',
        desc: 'Never lose track of your collection again. ThreadStocks allows you to list every skein, spool, or ball with surgical precision.',
        list: [
          'Track by brand (DMC, Anchor, Sullivans, etc.)',
          'Identify by official color code',
          'Real-time quantity management',
          'Categorize by thread type (cotton, silk, wool)'
        ]
      },
      item2: {
        title: 'Instant Updates',
        desc: 'The interface is designed to be as fast as your needle. Update your stocks in seconds after finishing a work session.',
        list: [
          'Quick increment/decrement (+/-)',
          'Instant search in your inventory',
          'Optimized interface to limit clicks',
          'Immediate synchronization with the server'
        ]
      },
      item3: {
        title: 'Shopping Companion',
        desc: 'Take your inventory everywhere with you. No more doubts at the craft store in front of the thread aisle.',
        list: [
          'Consult on mobile while at the store',
          'Avoid unnecessary duplicate purchases',
          'Instantly check if you have the required color for a new project',
          'Smooth and responsive "Mobile-First" interface'
        ]
      },
      ready: 'Ready to organize your threads?'
    },
    footer: {
      rights: 'All rights reserved.'
    },
    auth: {
      login: {
        title: 'Login',
        email: 'Email',
        password: 'Password',
        forgotPassword: 'Forgot password?',
        submit: 'Sign In',
        noAccount: "Don't have an account?",
        register: 'Register'
      },
      forgotPassword: {
        title: 'Reset Password',
        desc: 'Enter your email address and we will send you a link to reset your password.',
        email: 'Email',
        sending: 'Sending...',
        send: 'Send link',
        success: 'If an account exists for this email, a reset link has been sent.',
        error: 'An error occurred while sending the email.'
      },
      resetPassword: {
        title: 'New Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm Password',
        showPassword: 'Show password',
        submitting: 'Resetting...',
        submit: 'Change Password',
        success: 'Your password has been reset successfully. Redirecting to login...',
        error: 'The link is invalid or has expired.',
        tokenMissing: 'The reset token is missing.',
        mismatch: 'Passwords do not match.'
      },
      register: {
        title: 'Create Account',
        username: 'Username',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        submit: 'Register',
        hasAccount: 'Already have an account?',
        login: 'Login'
      }
    },
    app: {
      title: 'My threads',
      addThread: 'Add a thread',
      settings: 'Settings',
      noThreads: 'No threads found. Click the + button to add one!',
      loading: 'Loading...'
    },
    modals: {
      common: {
        cancel: 'Cancel',
        save: 'Save',
        add: 'Add',
        close: 'Close',
        delete: 'Delete',
        confirm: 'Confirm'
      },
      thread: {
        editTitle: 'Edit thread',
        addTitle: 'Add a thread',
        name: 'Thread Name',
        count: 'Thread Count',
        brand: 'Brand',
        type: 'Thread type',
        none: 'None'
      },
      settings: {
        title: 'Settings',
        account: 'Account',
        logout: 'Logout'
      },
      account: {
        title: 'Account Settings',
        info: 'Information',
        username: 'Username',
        email: 'Email',
        security: 'Security',
        changePassword: 'Change Password',
        oldPassword: 'Current Password',
        newPassword: 'New Password',
        confirmNewPassword: 'Confirm New Password',
        updatePassword: 'Update Password',
        dangerZone: 'Danger Zone',
        deleteDesc: 'Once you delete your account, there is no going back. Please be certain.',
        deleteAccount: 'Delete Account',
        passwordMismatch: 'Passwords do not match.',
        passwordSuccess: 'Password updated successfully.',
        passwordError: 'Error updating password.',
        deleteError: 'Error deleting account.'
      },
      confirm: {
        deleteThread: {
          title: 'Delete Thread',
          message: 'Are you sure you want to delete thread {id}?'
        },
        deleteAccount: {
          title: 'Delete Account',
          message: 'Are you sure you want to delete your account? This action is irreversible.'
        }
      }
    },
    card: {
      edit: 'EDIT',
      delete: 'DELETE',
      noId: 'NO ID'
    },
    notFound: {
      title: '404',
      message: 'Page Not Found',
      goHome: 'Go Home'
    }
  },
  fr: {
    nav: {
      login: 'Connexion',
      signin: 'S\'inscrire',
      home: 'Accueil',
      contact: 'Contact'
    },
    contact: {
      title: 'Nous contacter',
      subtitle: 'Une question ou une suggestion ? Envoyez-nous un message !',
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Une erreur est survenue lors de l\'envoi du message.'
    },
    home: {
      hero: {
        title: 'Gérez votre stock de {span} intelligemment',
        thread: 'fils',
        subtitle: 'ThreadStocks vous aide à suivre vos stocks de fils à broder, à coudre ou à tricoter. Ne manquez plus jamais la couleur parfaite pour vos projets.',
        startFree: 'Commencer gratuitement',
        learnMore: 'En savoir plus'
      },
      why: {
        title: 'Pourquoi utiliser ThreadStocks ?',
        feature1: {
          title: 'Inventaire Complet',
          desc: 'Répertoriez tous vos fils avec leurs références, marques et quantités exactes.'
        },
        feature2: {
          title: 'Mises à jour rapides',
          desc: 'Ajustez vos stocks en un clic après chaque session de création pour garder vos données à jour.'
        },
        feature3: {
          title: 'Accès partout',
          desc: 'Consultez votre stock depuis votre mobile quand vous êtes en magasin pour éviter les doublons.'
        }
      }
    },
    features: {
      title: 'Fonctionnalités de {span}',
      item1: {
        title: 'Gestion d\'inventaire précise',
        desc: 'Ne perdez plus jamais la trace de votre collection. ThreadStocks vous permet de répertorier chaque écheveau, bobine ou pelote avec une précision chirurgicale.',
        list: [
          'Suivi par marque (DMC, Anchor, Sullivans, etc.)',
          'Identification par code couleur officiel',
          'Gestion des quantités en temps réel',
          'Catégorisation par type de fil (coton, soie, laine)'
        ]
      },
      item2: {
        title: 'Mises à jour instantanées',
        desc: 'L\'interface est conçue pour être aussi rapide que votre aiguille. Mettez à jour vos stocks en quelques secondes après avoir terminé une session de travail.',
        list: [
          'Incrémentation/décrémentation rapide (+/-)',
          'Recherche instantanée dans votre inventaire',
          'Interface optimisée pour limiter les clics',
          'Synchronisation immédiate avec le serveur'
        ]
      },
      item3: {
        title: 'Compagnon de shopping',
        desc: 'Emportez votre inventaire partout avec vous. Fini les doutes au magasin de loisirs créatifs devant le rayon des fils.',
        list: [
          'Consultez sur mobile en étant au magasin',
          'Évitez les achats inutiles en double',
          'Vérifiez instantanément si vous avez la couleur requise pour un nouveau projet',
          'Interface fluide et réactive "Mobile-First"'
        ]
      },
      ready: 'Prêt à organiser vos fils ?'
    },
    footer: {
      rights: 'Tous droits réservés.'
    },
    auth: {
      login: {
        title: 'Connexion',
        email: 'Email',
        password: 'Mot de passe',
        forgotPassword: 'Mot de passe oublié ?',
        submit: 'Se connecter',
        noAccount: 'Vous n\'avez pas de compte ?',
        register: 'S\'inscrire'
      },
      forgotPassword: {
        title: 'Réinitialiser le mot de passe',
        desc: 'Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.',
        email: 'Email',
        sending: 'Envoi en cours...',
        send: 'Envoyer le lien',
        success: 'Si un compte existe pour cet email, un lien de réinitialisation a été envoyé.',
        error: 'Une erreur est survenue lors de l\'envoi de l\'email.'
      },
      resetPassword: {
        title: 'Nouveau mot de passe',
        newPassword: 'Nouveau mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        showPassword: 'Afficher le mot de passe',
        submitting: 'Réinitialisation...',
        submit: 'Changer le mot de passe',
        success: 'Votre mot de passe a été réinitialisé avec succès. Redirection vers la page de connexion...',
        error: 'Le lien est invalide ou a expiré.',
        tokenMissing: 'Le jeton de réinitialisation est manquant.',
        mismatch: 'Les mots de passe ne correspondent pas.'
      },
      register: {
        title: 'Créer un compte',
        username: 'Nom d\'utilisateur',
        email: 'Email',
        password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        submit: 'S\'inscrire',
        hasAccount: 'Vous avez déjà un compte ?',
        login: 'Se connecter'
      }
    },
    app: {
      title: 'Mes fils',
      addThread: 'Ajouter un fil',
      settings: 'Paramètres',
      noThreads: 'Aucun fil trouvé. Cliquez sur le bouton + pour en ajouter un !',
      loading: 'Chargement...'
    },
    modals: {
      common: {
        cancel: 'Annuler',
        save: 'Enregistrer',
        add: 'Ajouter',
        close: 'Fermer',
        delete: 'Supprimer',
        confirm: 'Confirmer'
      },
      thread: {
        editTitle: 'Modifier le fil',
        addTitle: 'Ajouter un fil',
        name: 'Nom du fil',
        count: 'Quantité',
        brand: 'Marque',
        type: 'Type de fil',
        none: 'Aucun'
      },
      settings: {
        title: 'Paramètres',
        account: 'Compte',
        logout: 'Déconnexion'
      },
      account: {
        title: 'Paramètres du compte',
        info: 'Informations',
        username: 'Nom d\'utilisateur',
        email: 'Email',
        security: 'Sécurité',
        changePassword: 'Changer le mot de passe',
        oldPassword: 'Mot de passe actuel',
        newPassword: 'Nouveau mot de passe',
        confirmNewPassword: 'Confirmer le nouveau mot de passe',
        updatePassword: 'Mettre à jour le mot de passe',
        dangerZone: 'Zone de danger',
        deleteDesc: 'Une fois que vous supprimez votre compte, il n\'y a pas de retour en arrière. Soyez-en sûr.',
        deleteAccount: 'Supprimer le compte',
        passwordMismatch: 'Les mots de passe ne correspondent pas.',
        passwordSuccess: 'Mot de passe mis à jour avec succès.',
        passwordError: 'Erreur lors de la mise à jour du mot de passe.',
        deleteError: 'Erreur lors de la suppression du compte.'
      },
      confirm: {
        deleteThread: {
          title: 'Supprimer le fil',
          message: 'Êtes-vous sûr de vouloir supprimer le fil {id} ?'
        },
        deleteAccount: {
          title: 'Supprimer le compte',
          message: 'Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.'
        }
      }
    },
    card: {
      edit: 'MODIFIER',
      delete: 'SUPPRIMER',
      noId: 'SANS ID'
    },
    notFound: {
      title: '404',
      message: 'Page non trouvée',
      goHome: 'Retour à l\'accueil'
    }
  }
}

const savedLocale = localStorage.getItem('locale') || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages,
})